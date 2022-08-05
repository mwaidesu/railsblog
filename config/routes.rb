Rails.application.routes.draw do
  resources :posts
  root 'posts#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  resources :users, only: %i[create show index] do
    resources :items, only: %i[create show index destroy]
  end
end
