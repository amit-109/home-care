# home-care

## LocationIQ Setup

This project uses `LocationIQ` for live address suggestions on the patient form.

### Local setup

Create a `.env` file in the project root:

```env
VITE_LOCATIONIQ_API_KEY=your_actual_locationiq_key
```

Then restart the Vite dev server.

### Vercel setup

In your Vercel project:

1. Open `Settings`
2. Open `Environment Variables`
3. Add:

```env
VITE_LOCATIONIQ_API_KEY=your_actual_locationiq_key
```

4. Save
5. Redeploy the project

Last updated: LocationIQ setup enabled.
