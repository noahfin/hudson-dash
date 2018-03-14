class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :phone
      t.string :fax
      t.string :website
      t.boolean :owns
      t.boolean :rents
      t.string :industry
      t.string :SF_using
      t.string :sic_code
      t.string :source_of_name
      t.string :suite
      t.integer :total_employees
      t.string :location_requirements
      t.string :year_founded
      t.boolean :data_checked
      t.boolean :exclussive
      t.boolean :active

      t.timestamps
    end
  end
end
