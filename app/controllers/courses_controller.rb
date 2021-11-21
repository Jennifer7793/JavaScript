class CoursesController < ApplicationController
  def index
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      redirect_to courses_path
    else
      render :new
    end
  end

  def update
    @course = Course.find_by(id: params[:id])
    if @course.update(course_params), notice: "updated!"
      redirect_to courses_path
    else
      render :edit
    end
  end

  def destroy
    @course = Course.find_by(id: params[:id])
    @course.destroy, notice: "Delete!"
    redirect_to courses_path
  end

  private
  def course_params
    params.require(:course).permit(:name, :price, :intro, :hour)
  end
end