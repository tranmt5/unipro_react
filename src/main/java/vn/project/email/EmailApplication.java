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
@CrossOrigin(origins = "http://localhost:8000")
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
	public String sendEmail(@RequestBody EmailMessage emailMessage) throws  MessagingException, IOException{
//		if(verifyRecaptcha(emailMessage.getReCaptcha())) {
//
//			return "Email sent successfully";
//		} else {
//			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
//			return "Invalid reCaptcha";
//		}
		sendMail(emailMessage);
		return "Email sent successfully";
	}

//	private boolean verifyRecaptcha(String gRecaptchaResponse) {
//		HttpHeaders httpHeaders = new HttpHeaders();
//		httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//		MultiValueMap<String, String>  map = new LinkedMultiValueMap<>();
//		map.add("secret",recaptchaSecret);
//		map.add("response",gRecaptchaResponse);
//
//		HttpEntity<MultiValueMap<String ,String>> request = new HttpEntity<>(map,httpHeaders);
//
//		ReCaptchaResponse response = restTemplate.postForObject(recaptchaServerURL, request, ReCaptchaResponse.class);
//		return response.isSuccess();
//	}

	private void sendMail(EmailMessage emailMessage) throws  MessagingException, IOException {

		long startTime = System.currentTimeMillis();
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);

		String mailSubject = emailMessage.getFromEmail() + " has sent a message to you";
		String mailContent = "<p><b>Email của học viên: </b>" + emailMessage.getFromEmail() + "</p>";
		mailContent +=  "<p><b>Họ tên: </b>" + emailMessage.getFullName() + "<br><b>Số điện thoại: </b>" + emailMessage.getPhone() + "<br><b>Chương trình quan tâm: </b>" + emailMessage.getProgram() + "<br><b>Thời gian có thể liên lạc lại với học viên: </b>" + emailMessage.getApointmentAt() + "</p>";
		mailContent += "<hr><img width='150' height='auto' src='cid:logoImage' alt='unipro_logo' />";

		mimeMessageHelper.setFrom(emailMessage.getFromEmail(),"UNIPRO.COM");
		mimeMessageHelper.setTo(emailMessage.getToEmail());
		mimeMessageHelper.setSubject(mailSubject);
		mimeMessageHelper.setText(mailContent,true);

		ClassPathResource resource= new ClassPathResource("/static/images/unipro_logo.png");
		mimeMessageHelper.addInline("logoImage",resource);
		javaMailSender.send(mimeMessage);
		long endTime = System.currentTimeMillis();
		System.out.println((endTime-startTime)/1000);
	}
}
