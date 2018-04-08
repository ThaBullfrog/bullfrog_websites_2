Rails.application.routes.draw do
  root 'static_pages#home'
  get '/work', to: 'static_pages#work'
  get '/contact', to: 'static_pages#contact'
end
