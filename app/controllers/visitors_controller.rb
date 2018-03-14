class VisitorsController < ApplicationController
  def index
    if current_user
      redirect_to '/home'
    end
  end
end
