# Job Location Mapping Integration Guide

## 🗺️ **Real-Time Job Location Mapping System**

This system automatically displays completed HVAC jobs on your website map while protecting customer privacy through coordinate generalization and zoom restrictions.

---

## 🔧 **Webhook Integration Setup**

### **1. HouseCall Pro Integration**

#### Configure Webhook in HouseCall Pro:
1. **Login to HouseCall Pro** → Settings → Integrations → Webhooks
2. **Add New Webhook** with these settings:
   - **URL**: `https://yourdomain.com/api/webhook/job-locations`
   - **Events**: `job.completed`
   - **Secret Key**: Generate a secure secret for validation

#### Sample HouseCall Pro Webhook Payload:
```json
{
  "event_type": "job_completed",
  "job_id": "HCP-12345",
  "customer_address": {
    "street": "123 Main St",
    "city": "Lake Charles",
    "state": "LA",
    "zip": "70601",
    "latitude": 30.2266,
    "longitude": -93.2174
  },
  "service_type": "AC Repair",
  "completion_date": "2025-10-23T14:30:00Z",
  "technician": "Mike Johnson",
  "customer_satisfaction": 5,
  "invoice_amount": 285.00,
  "service_category": "ac-repair"
}
```

### **2. Custom FSM Software Integration**

#### API Endpoint Configuration:
- **Endpoint**: `POST /api/webhook/job-locations`
- **Authentication**: HMAC signature validation
- **Rate Limiting**: 1000 requests/hour
- **Timeout**: 30 seconds

#### Required Webhook Fields:
```typescript
interface WebhookPayload {
  event_type: 'job_completed'
  job_id: string
  customer_address: {
    latitude: number
    longitude: number
    city: string
    state: string
    zip: string
  }
  service_type: string
  completion_date: string
  service_category: 'ac-repair' | 'heating-repair' | 'installation' | 'maintenance' | 'commercial' | 'emergency'
  technician?: string
  customer_satisfaction?: number // 1-5 scale
  invoice_amount?: number
}
```

---

## 🔒 **Privacy Protection Features**

### **Coordinate Generalization**
- **Precision Reduction**: Coordinates rounded to ~1km accuracy
- **Neighborhood Mapping**: Exact addresses converted to general areas
- **Zoom Restrictions**: Map limited to zoom levels 9-12 (no street-level view)

### **Privacy Implementation**:
```typescript
const protectLocationPrivacy = (lat: number, lng: number) => {
  const privacyRadius = 0.01 // ~1km accuracy
  return {
    lat: Math.round(lat / privacyRadius) * privacyRadius,
    lng: Math.round(lng / privacyRadius) * privacyRadius
  }
}
```

### **Data Retention**:
- **Active Display**: Last 30 days of completed jobs
- **Archive Policy**: Older jobs automatically removed from map
- **Customer Information**: No personal details stored or displayed

---

## 🛠️ **Technical Setup**

### **1. Environment Variables**
Add to your `.env.local` file:
```bash
# Google Maps API
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Webhook Security
WEBHOOK_SECRET_KEY=your_webhook_secret_key

# Database (choose one)
MONGODB_URL=mongodb://localhost:27017/coleair
# OR
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
# OR
FIREBASE_PROJECT_ID=your_firebase_project
```

### **2. Database Schema**

#### MongoDB Collection: `job_locations`
```javascript
{
  _id: ObjectId,
  job_id: String,
  lat: Number,
  lng: Number,
  service: String,
  date: Date,
  serviceType: String,
  neighborhood: String,
  satisfaction: Number,
  technician: String,
  invoice_amount: Number,
  created_at: Date
}
```

#### Supabase Table: `job_locations`
```sql
CREATE TABLE job_locations (
  id SERIAL PRIMARY KEY,
  job_id VARCHAR(50) UNIQUE NOT NULL,
  lat DECIMAL(10, 6) NOT NULL,
  lng DECIMAL(10, 6) NOT NULL,
  service VARCHAR(100) NOT NULL,
  date TIMESTAMP NOT NULL,
  service_type VARCHAR(50) NOT NULL,
  neighborhood VARCHAR(100) NOT NULL,
  satisfaction INTEGER CHECK (satisfaction >= 1 AND satisfaction <= 5),
  technician VARCHAR(100),
  invoice_amount DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **3. Google Maps API Setup**

1. **Enable APIs** in Google Cloud Console:
   - Maps JavaScript API
   - Geocoding API (if needed)

2. **API Key Restrictions**:
   - **HTTP referrers**: `yourdomain.com/*`
   - **APIs**: Maps JavaScript API, Geocoding API

3. **Replace API Key** in `/components/JobLocationMap.tsx`:
   ```typescript
   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
   ```

---

## 📊 **Features & Benefits**

### **For Marketing**:
- **Service Area Coverage**: Visual proof of service reach
- **Customer Satisfaction**: Display of star ratings
- **Recent Activity**: Shows business activity and reliability
- **Local Authority**: Demonstrates neighborhood presence

### **For Customers**:
- **Nearby Service Proof**: See recent work in their area
- **Technician Tracking**: Know who completed local jobs
- **Quality Assurance**: View customer satisfaction ratings
- **Coverage Confidence**: Verify service area coverage

### **For Business**:
- **Performance Analytics**: Track service distribution
- **Team Performance**: Monitor technician coverage areas
- **Customer Insights**: Understand service area demand
- **Marketing Proof**: Visual testimonials of service quality

---

## 🚀 **Deployment Checklist**

### **Pre-Launch**:
- [ ] Configure webhook endpoints in FSM software
- [ ] Set up database for job location storage
- [ ] Add Google Maps API key with proper restrictions
- [ ] Test webhook with sample job completion data
- [ ] Verify privacy protection (coordinates generalized)
- [ ] Test map zoom restrictions (min 9, max 12)

### **Post-Launch**:
- [ ] Monitor webhook delivery success rates
- [ ] Verify job locations appearing on map
- [ ] Check customer satisfaction display
- [ ] Test filter functionality (service types)
- [ ] Monitor page load performance
- [ ] Set up analytics tracking for map interactions

### **Ongoing Maintenance**:
- [ ] Weekly review of displayed job locations
- [ ] Monthly cleanup of old job records (>30 days)
- [ ] Quarterly privacy audit of displayed data
- [ ] Annual webhook security key rotation

---

## 📈 **SEO & Marketing Benefits**

### **Local SEO Enhancement**:
- **Fresh Content**: Automatically updated with new job completions
- **Local Proof**: Visual evidence of service area coverage
- **User Engagement**: Interactive map increases time on site
- **Trust Signals**: Customer ratings and recent activity display

### **Conversion Optimization**:
- **Social Proof**: See work completed in customer's neighborhood
- **Service Confidence**: Visual proof of active service coverage
- **Technician Familiarity**: Customers can see who works in their area
- **Quality Assurance**: Star ratings provide immediate credibility

---

## 🔍 **Testing & Validation**

### **Webhook Testing**:
```bash
# Test webhook endpoint
curl -X POST https://yourdomain.com/api/webhook/job-locations \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Signature: your_hmac_signature" \
  -d '{
    "event_type": "job_completed",
    "job_id": "TEST-123",
    "customer_address": {
      "latitude": 30.2266,
      "longitude": -93.2174,
      "city": "Lake Charles",
      "state": "LA",
      "zip": "70601"
    },
    "service_type": "AC Repair Test",
    "completion_date": "2025-10-23T14:30:00Z",
    "service_category": "ac-repair",
    "technician": "Test Technician",
    "customer_satisfaction": 5
  }'
```

### **Privacy Validation**:
1. **Coordinate Check**: Verify exact addresses are not visible
2. **Zoom Restriction**: Confirm map won't zoom below neighborhood level
3. **Info Display**: Ensure no sensitive customer data is shown
4. **Database Review**: Check stored data meets privacy standards

This system provides a powerful marketing tool while maintaining strict customer privacy standards and integrating seamlessly with your existing field service management workflow.