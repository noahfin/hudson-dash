json.extract! company, :id, :name, :phone, :fax, :website, :owns, :rents, :industry, :SF_using, :sic_code, :source_of_name, :suite, :total_employees, :location_requirements, :year_founded, :data_checked, :exclussive, :active, :created_at, :updated_at
json.url company_url(company, format: :json)
