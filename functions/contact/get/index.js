"use strict"

const { log, response, handleError } = require("lambda-shared-utils")
const Contact = require("./contact")

exports.handler = async (event) => {
  log.info("Event", { event })

  const plateNumber = event.queryStringParameters.plateNumber

  try {
    const contact = await Contact.findByPlateNumber(plateNumber)

    return response(201, "Contact found successfully", contact)
  } catch (err) {
    return handleError(err)
  }
}
