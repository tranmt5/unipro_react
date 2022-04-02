package vn.project.email;

public class EmailMessage {
    private String fromEmail;
    private String toEmail;
    private String content;
    private String reCaptcha;

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getToEmail() {
        return toEmail;
    }

    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getReCaptcha() {
        return reCaptcha;
    }

    public void setReCaptcha(String reCaptcha) {
        this.reCaptcha = reCaptcha;
    }
}
