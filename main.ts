import { LunataskApiClient } from 'api';
import { ObsidianFetcher } from 'api/fetcher';
import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { pingTestLunataskApi } from 'tests/api/ping';

export default class LunataskPlugin extends Plugin {
    async onload() {
        console.log("Lunatask plugin loaded");
        // Onload, fetches data from Lunatask API
        pingTestLunataskApi();
    }

    onunload() {
        console.log("Lunatask plugin unloaded");
    }
    
}