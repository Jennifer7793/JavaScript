class UsersController < ApplicationController
  def sign_up
    @user = User.new
  end

  def sign_in
    @user = User.new
  end

  def check
    u = User.login(params[:user])
    if u 
      session[:userid] = u.id
      redirect_to "/"
    else
      render html: "no user"
    end
  end
end

  def account_verify

    @user = User.new(clean_params)

    if @user.save
     redirect_to "/"
    else
     render :sign_up 
    end
  end

  private
  def clean_params
    user_params.require(:user).permit(:username, :password, :email)
  end
end
