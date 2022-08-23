"use strict"

const { log } = require("lambda-shared-utils")
const connection = require("./mysql-connection")

/**
 * Finds a contact information by a vehicle plate number
 * @param {string} plateNumber
 * @returns {Promise} Promise returns query information
 */
exports.findByPlateNumber = async (plateNumber) => {
    log.info("Finding contact...")

    const contact = await connection.findOne(`
        SELECT * FROM contact
        JOIN vehicle_information ON vehicle_information.contactId = contact.id
        WHERE vehicle_information.plate_number = ?`, [plateNumber])

    log.info("Contact found successfully")
    return contact
}