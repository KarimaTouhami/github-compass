# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please email me directly instead of opening a public issue.

**DO NOT** create a public GitHub issue for security vulnerabilities.

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

I'll respond within 48 hours and work on a fix as soon as possible.

## Security Best Practices

### For Users

1. **Never commit your `.env.local` file**
   - It contains your GitHub token
   - Already in `.gitignore`

2. **Use environment variables**
   - Store sensitive data in `.env.local`
   - Never hardcode tokens in code

3. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   ```

### For Contributors

1. **No sensitive data in code**
   - Use `process.env` for secrets
   - Review commits before pushing

2. **Validate all inputs**
   - GitHub usernames are sanitized
   - API responses are validated

3. **Follow TypeScript strict mode**
   - Type safety prevents many bugs
   - Already configured in `tsconfig.json`

## Known Security Measures

✅ Server-side API route (token never exposed to client)  
✅ Input validation on GitHub usernames  
✅ Rate limiting via GitHub API  
✅ No user data storage  
✅ HTTPS only in production  
✅ TypeScript strict mode  
✅ Dependencies regularly audited  

## Third-Party Services

- **GitHub API**: Official REST API v3
- **Vercel**: Hosting platform (when deployed)

Both services have their own security policies and are industry-standard.
