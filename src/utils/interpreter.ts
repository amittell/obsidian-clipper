// NOTE: This file has been modified as part of removing the interpreter feature to eliminate data exfiltration risk.
import { generalSettings, saveSettings } from './storage-utils';
import { PromptVariable, Template, ModelConfig } from '../types/types';
import { compileTemplate } from './template-compiler';
import { applyFilters } from './filters';
import { formatDuration } from './string-utils';
import { adjustNoteNameHeight } from './ui-utils';
import { debugLog } from './debug';
import { getMessage } from './i18n';
import { updateTokenCount } from './token-counter';

// These constants are kept to avoid breaking references
const RATE_LIMIT_RESET_TIME = 60000; // 1 minute in milliseconds
let lastRequestTime = 0;

// Store event listeners for cleanup
const eventListeners = new WeakMap<HTMLElement, { [key: string]: EventListener }>();

// Disabled - Function stub returning empty response
export async function sendToLLM(promptContext: string, content: string, promptVariables: PromptVariable[], model: ModelConfig): Promise<{ promptResponses: any[] }> {
    debugLog('Interpreter', 'Interpreter functionality has been disabled.');
    return { promptResponses: [] };
}

// Empty parser function - returns empty result
function parseLLMResponse(responseContent: string, promptVariables: PromptVariable[]): { promptResponses: any[] } {
    return { promptResponses: [] };
}

// Returns empty array to disable prompt collection
export function collectPromptVariables(template: Template | null): PromptVariable[] {
    return [];
}

// Disabled interpreter initialization function
export async function initializeInterpreter(template: Template, variables: { [key: string]: string }, tabId: number, currentUrl: string) {
    const interpreterContainer = document.getElementById('interpreter');
    const interpretBtn = document.getElementById('interpret-btn');
    
    // Hide interpreter UI
    if (interpreterContainer) interpreterContainer.style.display = 'none';
    if (interpretBtn) interpretBtn.style.display = 'none';
}

// Disabled handler function - immediately returns
export async function handleInterpreterUI(
    template: Template,
    variables: { [key: string]: string },
    tabId: number,
    currentUrl: string,
    modelConfig: ModelConfig
): Promise<void> {
    debugLog('Interpreter', 'Interpreter functionality has been disabled.');
    return;
}

// No-op function that keeps the signature but does nothing
export function replacePromptVariables(promptVariables: PromptVariable[], promptResponses: any[]) {
    // Functionality disabled
    return;
}
