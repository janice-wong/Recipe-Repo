Rails.application.routes.draw do
  root :to => 'site#index'

  namespace :api do
    resources :recipes do
      resources :ingredients
    end
  end
end
