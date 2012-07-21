module Api
  class BooleansController < BaseController

    def show
      plugin = Sources.boolean_plugin(params[:source])
      result = plugin.get
      respond_with(result.to_json)
    end

  end
end