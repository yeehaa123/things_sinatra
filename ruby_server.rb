require 'em-websocket'
require 'json'

# js_function = "newDevice({hi:1});"
# message = {stuff: js_function}
EM.run {
  EM::WebSocket.run(:host => "0.0.0.0", :port => 8080) do |ws|
    ws.onopen { |handshake|
      puts "WebSocket connection open"
      puts handshake
    }

    ws.onclose { puts "Connection closed" }

    ws.onmessage { |msg|
      puts "Recieved message: #{msg}"
      ws.send ({method: 'newDevice', params: {name: 'blah'}}.to_json)
    }
  end
}
