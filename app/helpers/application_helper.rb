module ApplicationHelper
  def title
    base_title = "Bullfrog Websites"
    @title ? "#{@title} | #{base_title}" : base_title
  end

  def description_tag(description='')
    unless description.empty?
      return (
        '<meta name="description" content="'
        + description
        + '">'
      ).html_safe
    end
  end

  def show_flashes
    html = Array.new
    flash.each do |message_type, message|
      html.push(
        "<div class=\"alert alert-" +
        message_type + "\">" +
        message +
        "</div>"
      )
    end
    render html: html.join.html_safe
  end

  def show_errors(errors)
    str = '<div class="alert alert-danger">'
    errors.each_with_index do |error, i|
      str += '&bull;&nbsp;'
      str += error
      unless(i == errors.length - 1)
        str += "<br>"
      end
    end
    str += '</div>'
    render html: str.html_safe
  end
end
