"use strict"

const { log, response, handleError, parseJSON } = require("lambda-shared-utils")
const Contact = require("./contact")

exports.handler = async (event) => {
  log.info("Event", { event })

  try {
    const body = parseJSON(event.body)
    const { firstName, lastName, email, phone } = body
    
    const contact = { firstName, lastName, email, phone }
    await Contact.create(contact)

    return response(201, "Contact created successfully")
  } catch (err) {
    return handleError(err)
  }
}
