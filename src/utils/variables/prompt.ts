import { generalSettings } from '../storage-utils';

// NOTE: This function has been modified as part of removing the interpreter feature 
// to eliminate data exfiltration risk. It now always returns an empty string.
export async function processPrompt(match: string, variables: { [key: string]: string }, currentUrl: string): Promise<string> {
	// Interpreter functionality has been disabled
	// Return empty string for any prompt variables
	return '';
}
