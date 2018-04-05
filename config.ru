require_relative 'config/environment'

map BullfrogWebsites2::Application.config.action_controller.
  relative_url_root || "/" { run Rails.application }
