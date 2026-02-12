/**
 * Analytics tracking utility for AUREA COMMKT
 * Tracks user interactions, conversions, and page views
 */

export interface AnalyticsEvent {
  eventName: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class AnalyticsTracker {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Initialize tracking (e.g., page view on app load)
   */
  private initializeTracking(): void {
    this.trackPageView(window.location.pathname);
  }

  /**
   * Track page views
   */
  trackPageView(path: string): void {
    this.logEvent({
      eventName: "page_view",
      category: "engagement",
      label: path,
      timestamp: Date.now(),
    });

    // Send to analytics endpoint if available
    this.sendToAnalytics({
      eventName: "page_view",
      category: "engagement",
      label: path,
      timestamp: Date.now(),
    });
  }

  /**
   * Track CTA clicks (buttons, links)
   */
  trackCTAClick(ctaName: string, ctaType: string): void {
    this.logEvent({
      eventName: "cta_click",
      category: "conversion",
      label: ctaName,
      value: 1,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "cta_click",
      category: "conversion",
      label: `${ctaName}_${ctaType}`,
      timestamp: Date.now(),
    });
  }

  /**
   * Track newsletter subscriptions
   */
  trackNewsletterSubscription(email: string, success: boolean): void {
    this.logEvent({
      eventName: "newsletter_subscription",
      category: "conversion",
      label: success ? "success" : "failed",
      value: success ? 1 : 0,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "newsletter_subscription",
      category: "conversion",
      label: success ? "success" : "failed",
      timestamp: Date.now(),
    });
  }

  /**
   * Track course/product views
   */
  trackProductView(productName: string, productId: number): void {
    this.logEvent({
      eventName: "product_view",
      category: "engagement",
      label: productName,
      value: productId,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "product_view",
      category: "engagement",
      label: productName,
      timestamp: Date.now(),
    });
  }

  /**
   * Track purchase/payment initiation
   */
  trackPurchaseInitiation(productName: string, price: number): void {
    this.logEvent({
      eventName: "purchase_initiation",
      category: "conversion",
      label: productName,
      value: price,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "purchase_initiation",
      category: "conversion",
      label: productName,
      value: price,
      timestamp: Date.now(),
    });
  }

  /**
   * Track purchase completion
   */
  trackPurchaseCompletion(productName: string, price: number, orderId: string): void {
    this.logEvent({
      eventName: "purchase_completion",
      category: "conversion",
      label: productName,
      value: price,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "purchase_completion",
      category: "conversion",
      label: `${productName}_${orderId}`,
      value: price,
      timestamp: Date.now(),
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(percentage: number): void {
    // Only track at certain milestones to avoid spam
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(percentage)) {
      this.sendToAnalytics({
        eventName: "scroll_depth",
        category: "engagement",
        label: `${percentage}%`,
        value: percentage,
        timestamp: Date.now(),
      });
    }
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(page: string, timeInSeconds: number): void {
    this.sendToAnalytics({
      eventName: "time_on_page",
      category: "engagement",
      label: page,
      value: timeInSeconds,
      timestamp: Date.now(),
    });
  }

  /**
   * Track external link clicks
   */
  trackExternalLinkClick(url: string, linkText?: string): void {
    this.logEvent({
      eventName: "external_link_click",
      category: "engagement",
      label: linkText || url,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "external_link_click",
      category: "engagement",
      label: url,
      timestamp: Date.now(),
    });
  }

  /**
   * Track form submissions
   */
  trackFormSubmission(formName: string, success: boolean): void {
    this.logEvent({
      eventName: "form_submission",
      category: "conversion",
      label: formName,
      value: success ? 1 : 0,
      timestamp: Date.now(),
    });

    this.sendToAnalytics({
      eventName: "form_submission",
      category: "conversion",
      label: `${formName}_${success ? "success" : "failed"}`,
      timestamp: Date.now(),
    });
  }

  /**
   * Log event locally
   */
  private logEvent(event: AnalyticsEvent): void {
    this.events.push(event);
    // Keep only last 100 events in memory
    if (this.events.length > 100) {
      this.events.shift();
    }
  }

  /**
   * Send event to analytics endpoint
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    try {
      // Get analytics endpoint from environment
      const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
      const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

      if (!endpoint || !websiteId) {
        console.warn("[Analytics] Endpoint or website ID not configured");
        return;
      }

      // Send analytics data
      const payload = {
        ...event,
        sessionId: this.sessionId,
        websiteId,
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // Use sendBeacon for reliability (especially on page unload)
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, JSON.stringify(payload));
      } else {
        // Fallback to fetch
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch((err) => console.warn("[Analytics] Failed to send event:", err));
      }
    } catch (error) {
      console.warn("[Analytics] Error sending event:", error);
    }
  }

  /**
   * Get all tracked events (for debugging)
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Get session ID
   */
  getSessionId(): string {
    return this.sessionId;
  }
}

// Export singleton instance
export const analytics = new AnalyticsTracker();
