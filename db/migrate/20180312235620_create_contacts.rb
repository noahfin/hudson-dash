class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :Prefix
      t.string :first_name
      t.string :middle_initial
      t.string :last_name
      t.string :suffix
      t.string :title
      t.string :business_email
      t.string :personal_email
      t.string :add_email
      t.boolean :shared
      t.string :phone_1
      t.string :Phone_2
      t.text :comments

      t.timestamps
    end
  end
end
