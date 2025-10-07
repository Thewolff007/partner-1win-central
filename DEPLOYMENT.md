# Ubuntu Deployment Guide for 1win Partners

## Prerequisites
- Ubuntu 20.04 or higher
- Root or sudo access
- Domain name pointed to your server IP

## Step 1: Initial Server Setup

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl wget git build-essential
```

## Step 2: Install Node.js and npm

```bash
# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

## Step 3: Install Nginx

```bash
# Install Nginx
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

## Step 4: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Check firewall status
sudo ufw status
```

## Step 5: Clone and Build Your Project

```bash
# Navigate to web root
cd /var/www

# Clone your repository (replace with your actual repo)
sudo git clone https://github.com/yourusername/1win-partners.git
cd 1win-partners

# Install dependencies
sudo npm install

# Build for production
sudo npm run build
```

## Step 6: Configure Nginx for Your Site

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/1win-partners
```

Add this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/1win-partners/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

Save and exit (Ctrl+X, then Y, then Enter)

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/1win-partners /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Step 7: Install SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow the prompts:
# 1. Enter your email
# 2. Agree to terms
# 3. Choose to redirect HTTP to HTTPS (option 2)

# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 8: Set Up Auto-Deployment (Optional)

Create a deployment script:

```bash
sudo nano /var/www/deploy.sh
```

Add this content:

```bash
#!/bin/bash
cd /var/www/1win-partners
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "Deployment completed at $(date)"
```

Make it executable:

```bash
sudo chmod +x /var/www/deploy.sh
```

## Step 9: Performance Optimization

```bash
# Install PM2 for process management (if needed for API)
sudo npm install -g pm2

# Optimize Nginx
sudo nano /etc/nginx/nginx.conf
```

Add/modify these settings in the `http` block:

```nginx
# Performance
worker_processes auto;
worker_connections 1024;
keepalive_timeout 65;

# Enable gzip
gzip on;
gzip_comp_level 5;
gzip_min_length 256;
```

## Step 10: Monitor and Maintain

```bash
# View Nginx access logs
sudo tail -f /var/www/logs/access.log

# View Nginx error logs
sudo tail -f /var/www/logs/error.log

# Monitor server resources
htop

# Check disk usage
df -h

# Restart Nginx if needed
sudo systemctl restart nginx
```

## SEO Optimization

Your site is already configured with:
- ✅ Google Analytics (G-VGYE50KJY9)
- ✅ Meta tags for SEO
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ robots.txt
- ✅ Sitemap ready
- ✅ Multi-language support

## Backup Strategy

```bash
# Create backup script
sudo nano /root/backup.sh
```

Add:

```bash
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/1win-partners_$DATE.tar.gz /var/www/1win-partners
find $BACKUP_DIR -type f -mtime +7 -delete
```

Schedule daily backups:

```bash
sudo chmod +x /root/backup.sh
sudo crontab -e
# Add: 0 2 * * * /root/backup.sh
```

## Troubleshooting

### Site not loading
```bash
sudo systemctl status nginx
sudo nginx -t
sudo tail -f /var/logs/error.log
```

### Permission issues
```bash
sudo chown -R www-data:www-data /var/www/1win-partners
sudo chmod -R 755 /var/www/1win-partners
```

### Clear cache
```bash
# Clear browser cache
# Ctrl+Shift+Delete in browser

# Clear Nginx cache
sudo rm -rf /var/cache/nginx/*
sudo systemctl reload nginx
```

## Domain Configuration

Point your domain DNS to your server:
1. Go to your domain registrar
2. Add A record: `@` → Your Server IP
3. Add A record: `www` → Your Server IP
4. Wait 5-10 minutes for DNS propagation

## Security Checklist

- [x] SSL certificate installed
- [x] Firewall configured
- [x] Security headers added
- [x] Hidden files blocked
- [x] Regular backups scheduled
- [x] Auto-updates enabled

## Your Site URLs

- Main site: https://your-domain.com
- Blog: https://your-domain.com/blog
- Products: https://your-domain.com/products
- FAQ: https://your-domain.com/faq
- Gallery: https://your-domain.com/gallery
- Contacts: https://your-domain.com/contacts

## Important Links

- Promo Code: **credit500**
- Join Link: https://lkxw.cc/a0b0
- Affiliate Portal: https://1win.run/?p=syeU
- Telegram Support: https://t.me/aviatormanager1

---

🎉 **Congratulations!** Your 1win Partners affiliate site is now live!
