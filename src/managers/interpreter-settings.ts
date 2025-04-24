// NOTE: This file has been modified as part of removing the interpreter feature to eliminate data exfiltration risk.
import { generalSettings, saveSettings } from '../utils/storage-utils';
import { ModelConfig, Provider } from '../types/types';
import { debugLog } from '../utils/debug';

// Stub interface to maintain type compatibility
export interface PresetProvider {
    id: string;
    name: string;
    baseUrl: string;
    apiKeyUrl?: string;
    apiKeyRequired?: boolean;
    modelsList?: string;
    popularModels?: Array<{
        id: string;
        name: string;
        recommended?: boolean;
    }>;
}

// Disabled function - does nothing
export async function initializeInterpreterSettings(): Promise<void> {
    debugLog('Interpreter', 'Interpreter settings initialization skipped - feature disabled');
    // Functionality disabled
}

// Disabled function - does nothing
export function updatePromptContextVisibility(): void {
    // Functionality disabled
}

// Disabled function - returns empty object
export async function getPresetProviders(): Promise<Record<string, PresetProvider>> {
    // Return empty providers list to prevent any external API calls
    return {};
}

// Disabled function - does nothing
export function initializeModelList(): void {
    // Functionality disabled
    debugLog('Interpreter', 'Model list initialization skipped - feature disabled');
}
