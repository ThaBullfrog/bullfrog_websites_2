module ApplicationHelper
  def title
    base_title = "Bullfrog Websites"
    @title ? "#{@title} | #{base_title}" : base_title
  end
end
