class PagesController < ActionController::Base
  def index
    render html: params
  end
  
  def about
  end
end

