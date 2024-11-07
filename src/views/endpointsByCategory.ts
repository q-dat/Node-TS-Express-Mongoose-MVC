export const endpointsByCategory = {
    Location: [
      { method: 'get', url: '/api/locations', description: 'Get all locations' },
      { method: 'get', url: '/api/locations/:id', description: 'Get a location by id' },
      { method: 'post', url: '/api/locations', description: 'Create a new location' },
      { method: 'put', url: '/api/locations/:id', description: 'Update a location by id' },
      { method: 'delete', url: '/api/locations/:id', description: 'Delete a location by id' }
    ]
  }