# Use the official Nginx base image
FROM nginx

# Copy the HTML file to the default Nginx HTML directory
COPY index.html /usr/share/nginx/html

# Expose port 80 to allow incoming connections
EXPOSE 80

# Start the Nginx server when the container launches
CMD ["nginx", "-g", "daemon off;"]
