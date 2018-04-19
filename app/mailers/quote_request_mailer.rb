class QuoteRequestMailer < ApplicationMailer
  def quote_request(request)
    @request = request
    mail(
      to: "jeremiahkellick@gmail.com",
      from: request.email,
      subject: "QUOTE REQUEST"
    )
  end
end
