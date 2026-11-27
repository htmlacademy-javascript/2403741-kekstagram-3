import { mockDateGenerator } from './moke-generator.js';
import { MockConfig } from './configs.js';
import { createGallery } from './gallery.js';

const mockData = mockDateGenerator(MockConfig);
createGallery('.pictures', mockData);

