class UsersController < ApplicationController
  def courses
  end
  
  def new
    @course = Course.new
  end

  def before_create
    redirect_to '/courses'
    redirect_to course_path
  end
end
