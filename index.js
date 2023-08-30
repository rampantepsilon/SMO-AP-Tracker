const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const path = require('path')

let template = [
    {
        label: 'App',
        submenu: [
            {
                label: 'Reset Tracker',
                role: 'reload',
                accelerator: 'F5'
            }, {
                label: 'Toggle Dev Tools',
                role: 'toggledevtools',
                accelerator: 'CommandOrControl+Alt+I',
                enabled: true,
                visible: false
            }, {
                label: 'Exit',
                role: 'quit',
                accelerator: 'Alt+F4'
            }
        ]
    }, {
        label: 'Version ' + app.getVersion(),
        click() {
            changeLog()
        }
    }
]

const changelogOptions = {
    type: 'info',
    buttons: ['Close'],
    title: 'Changelog',
    message: 'Changes to v1.1.0',
    detail: `- Autotracker enabled if you connect to the AP Multiworld (local or hosted)
    - Tracker will mark off locations when selected in the Manual Client
    - Tracker will track checks from other players.

    Changes to v1.1.1
    - Added prefilled information for connection screen
    - Fixed issue where fonts were too small to display on a stream capture
    - Fixed issue where "Our First Power Moon!" would count as a power moon even if it wasn't.
    - Fixed issue where the moon lists would temporarily reset when manually changing information
    
    Changes to come to v1.2.0
    - Design Updates`
}

//Function for Changelog
function changeLog() {
    dialog.showMessageBox(null, changelogOptions, (response, checkboxChecked) => { });
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 1625,
        height: 950,
        title: "SMO AP Tracker",
        webPreferences: { nodeIntegration: 'true', },
    })

    win.loadFile('src/server.html')

    //win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})