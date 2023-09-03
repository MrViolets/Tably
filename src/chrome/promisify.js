'use strict'

/* global chrome */

export const menusCreate = promisifyChromeMethod(chrome.contextMenus.create.bind(chrome.contextMenus))
export const menusUpdate = promisifyChromeMethod(chrome.contextMenus.update.bind(chrome.contextMenus))
export const menusRemoveAll = promisifyChromeMethod(chrome.contextMenus.removeAll.bind(chrome.contextMenus))
export const storageLocalGet = promisifyChromeMethod(chrome.storage.local.get.bind(chrome.storage.local))
export const storageLocalSet = promisifyChromeMethod(chrome.storage.local.set.bind(chrome.storage.local))
export const tabGroupsUpdate = promisifyChromeMethod(chrome.tabGroups.update.bind(chrome.tabGroups))
export const tabsCreate = promisifyChromeMethod(chrome.tabs.create.bind(chrome.tabs))
export const tabsUngroup = promisifyChromeMethod(chrome.tabs.ungroup.bind(chrome.tabs))
export const tabsGroup = promisifyChromeMethod(chrome.tabs.group.bind(chrome.tabs))
export const tabsGet = promisifyChromeMethod(chrome.tabs.get.bind(chrome.tabs))
export const tabsQuery = promisifyChromeMethod(chrome.tabs.query.bind(chrome.tabs))

function promisifyChromeMethod (method) {
  return (...args) =>
    new Promise((resolve, reject) => {
      method(...args, (result) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message || JSON.stringify(chrome.runtime.lastError)))
        } else {
          resolve(result)
        }
      })
    })
}
