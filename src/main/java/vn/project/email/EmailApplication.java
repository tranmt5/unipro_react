package vn.project.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.*;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.mail.*;
import javax.mail.internet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:81")
public class EmailApplication {

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${recaptcha.secret}")
	private String recaptchaSecret;

	@Value("${recaptcha.url}")
	private String recaptchaServerURL;

	@Bean
	RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Autowired
	private RestTemplate restTemplate;

	public static void main(String[] args) {
		SpringApplication.run(EmailApplication.class, args);
	}

	@RequestMapping(value = "/send", method = RequestMethod.POST)
	public String sendEmail(@RequestBody EmailMessage emailMessage, HttpServletResponse response) throws  MessagingException, IOException{
		System.out.println(emailMessage.getReCaptcha());
		if(verifyRecaptcha(emailMessage.getReCaptcha())) {
			sendMail(emailMessage);
			return "Email sent successfully";
		} else {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			return "Invalid reCaptcha";
		}
	}

	private boolean verifyRecaptcha(String gRecaptchaResponse) {
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String>  map = new LinkedMultiValueMap<>();
		map.add("secret",recaptchaSecret);
		map.add("response",gRecaptchaResponse);

		HttpEntity<MultiValueMap<String ,String>> request = new HttpEntity<>(map,httpHeaders);

		ReCaptchaResponse response = restTemplate.postForObject(recaptchaServerURL, request, ReCaptchaResponse.class);
		return response.isSuccess();
	}

	private void sendMail(EmailMessage emailMessage) throws  MessagingException, IOException {

		long startTime = System.currentTimeMillis();
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);

		String mailSubject = emailMessage.getFromEmail() + " has sent a message to you";
		String mailContent = "<p><b>Sender Email: </b>" + emailMessage.getFromEmail() + "</p>";
		mailContent +=  "<p><b>Content: </b>" + emailMessage.getContent() + "</p>";
		mailContent += "<hr><img width='100' height='100' src='cid:logoImage' />";

		mimeMessageHelper.setFrom(emailMessage.getFromEmail(),"HIPTECHVN.COM");
		mimeMessageHelper.setTo(emailMessage.getToEmail());
		mimeMessageHelper.setSubject(mailSubject);
		mimeMessageHelper.setText(mailContent,true);

		ClassPathResource resource= new ClassPathResource("/static/images/thien-nhien7.jpg");
		mimeMessageHelper.addInline("logoImage",resource);
		javaMailSender.send(mimeMessage);
		long endTime = System.currentTimeMillis();
		System.out.println((endTime-startTime)/1000);
	}
}
