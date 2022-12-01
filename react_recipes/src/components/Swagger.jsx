import React from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerApp = () => <SwaggerUI url="http://127.0.0.1:8000/openapi" />

export default SwaggerApp