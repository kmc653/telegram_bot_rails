class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def new
    @product = Product.new
    @product.upc = params[:upc]
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to @product, notice: 'Product was successfully created.'
    else
      render :new
    end
  end

  def get_barcode
    @product = Product.find_or_initialize_by(upc: params[:upc])
    unless @product.new_record?
      redirect_to @product
    else
      redirect_to new_product_path(upc: params[:upc])
    end
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :upc, :image_url)
    end
end
