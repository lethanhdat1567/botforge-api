module.exports = {
    apps: [
        {
            name: 'botforge-api',
            script: './dist/index.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'botforge-queue',
            script: './dist/queue.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '300M',
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'botforge-schedule',
            script: './dist/schedule.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '300M',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
