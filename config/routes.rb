Rails.application.routes.draw do


  resources :tasks
  resources :companies
  resources :contacts
  get 'dashbord/index'

  namespace :admin do
    resources :users
    root to: "users#index"
  end

  root to: 'visitors#index'



   get "/:page" => "pages#show"
   get '/home' => "pages#home", as: :user_root


 devise_for :users
end

