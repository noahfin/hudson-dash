Rails.application.routes.draw do


  get 'dashbord/index'

  namespace :admin do
    resources :users
    root to: "users#index"
  end
  root to: 'visitors#index'
  devise_for :users
  resources :users
   get "/:page" => "pages#show"

end

