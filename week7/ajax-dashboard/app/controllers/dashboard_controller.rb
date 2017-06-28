class DashboardController < ApplicationController
  def info

    # single-page-app  - makes requests to our Rails API endpoint at /info-api




  end


  def info_api

    u = `uptime`
    hog = `ps xr |head -n 2`
    name = cat_name()

    # render text: "string"

    render json: {
      uptime: u.strip,
      cpuhog: hog.strip,
      catname: name
    }

  end


  def uptime
    u = `uptime`
    render :text => u
  end

  def cpu_hog
    hog = `ps xr |head -n 2`
    # render :text => hog
    render text: hog
  end


  private
  def cat_name

    options = {
      male: {
        titles: ['Mr', 'Lord', 'Count', 'Sir', 'Prince', 'His Lordship', 'Captain'],
        names: ['Lewis', 'Felix', 'Garfield', 'Baxter', 'Gavin']
      },
      female: {
        titles: ['Ms', 'Lady', 'Countess', 'Duchess', 'Baroness', 'Her Ladyship'],
        names: ['Kristy', 'Liesl', 'Helga', 'Pia', 'Suki']
      },
      surnames: ['Bergstrom', 'von Klippendorf', 'Eckersley', 'Weinberg', 'Straford-upon-Avon']
    }

    gender = [:male, :female].sample

    generated_name = "#{ options[gender][:titles].sample } #{ options[gender][:names].sample } #{ options[:surnames].sample}"
    # render text: generated_name

    json_response = {
      title: options[gender][:titles].sample,
      first_name: options[gender][:names].sample,
      surname: options[:surnames].sample
    }

    json_response
  end


end
