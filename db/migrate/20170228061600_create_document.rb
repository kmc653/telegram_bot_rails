class CreateDocument < ActiveRecord::Migration[5.0]
  def change
    create_table :documents do |t|
      t.binary :sign
      t.datetime :signed_on

      t.timestamps
    end
  end
end
