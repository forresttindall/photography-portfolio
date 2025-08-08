// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Suppress specific SES warnings that are harmless but noisy
const suppressSESWarning = (message) => {
  if (typeof message === 'string') {
    return message.includes("SES The 'dateTaming' option is deprecated") ||
           message.includes("SES The 'mathTaming' option is deprecated") ||
           message.includes("SES Removing unpermitted intrinsics") ||
           message.includes("Removing intrinsics.%DatePrototype%.toTemporalInstant") ||
           message.includes("lockdown-install.js");
  }
  return false;
};

// Override multiple console methods
const originalWarn = console.warn;
const originalLog = console.log;
const originalError = console.error;
const originalInfo = console.info;

console.warn = (...args) => {
  if (!suppressSESWarning(args[0])) {
    originalWarn.apply(console, args);
  }
};

console.log = (...args) => {
  if (!suppressSESWarning(args[0])) {
    originalLog.apply(console, args);
  }
};

console.error = (...args) => {
  if (!suppressSESWarning(args[0])) {
    originalError.apply(console, args);
  }
};

console.info = (...args) => {
  if (!suppressSESWarning(args[0])) {
    originalInfo.apply(console, args);
  }
};
