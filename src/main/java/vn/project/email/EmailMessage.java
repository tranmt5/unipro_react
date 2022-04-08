package vn.project.email;

import java.util.Date;

public class EmailMessage {
    private String fromEmail;
    private String toEmail;
    private String fullName;
    private String phone;
    private String program;
    private Date apointmentAt;

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

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public Date getApointmentAt() {
        return apointmentAt;
    }

    public void setApointmentAt(Date apointmentAt) {
        this.apointmentAt = apointmentAt;
    }
}
