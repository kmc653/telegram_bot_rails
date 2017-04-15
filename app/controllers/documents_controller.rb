class DocumentsController < ApplicationController

  def index
    @documents = Document.all
  end

  def new
    @document = Document.new
  end

  def create
    @document = Document.create(documents_params)
    @document.signed_on = DateTime.now

    if @document.save
      redirect_to document_path(@document)
    else
      render :new
    end
  end

  def show
    @document = Document.find(params[:id])
  end

  private

    def documents_params
      params.require(:document).permit(:sign)
    end
end
