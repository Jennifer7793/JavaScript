Rails.application.routes.draw do
  get "/", to: "pages#index"
  # root "pages#index" 另種寫法
  get "/about", to: "pages#about"

  get "/sign_up", to: "users#sign_up"
  post "account_verify", to: "users#account_verify"
end
