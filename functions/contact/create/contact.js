"use strict"

const { log } = require("lambda-shared-utils")
const connection = require("./mysql-connection")

/**
 * Creats a contact
 * @param {object} contact
 * @param {string} contact.firstName
 * @param {string} contact.lastName
 * @param {string} contact.email
 * @param {string} contact.phone
 * @returns {Promise} Promise returns query information
 */
exports.create = async (contact) => {
    log.info("Creating contact...")

    const data = await connection.query("INSERT INTO contact SET ?", contact)

    log.info("Contact created successfully")
    return data // For unit tests
}