require_relative 'config/environment'

map SampleApp::Application.config.action_controller.relative_url_root || "/" do
  run Rails.application
end
