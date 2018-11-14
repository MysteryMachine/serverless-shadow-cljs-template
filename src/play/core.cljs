(ns play.core)

(defn ping! [event context]
  (js/Promise.
   (fn [success! failure!]
     (success!
      #js {:statusCode 200
           :body (js/JSON.stringify
                  #js {:message "Hello world!"})})))) 

(defn exports []
  #js {:ping ping!})

(defn repl [])
