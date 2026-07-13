# AreWeThereYet Case Study

## Summary

AreWeThereYet is an AR route-recording and playback prototype for Snap Spectacles. It helps people share the routes that normal maps struggle to explain: indoor paths, confusing venue transitions, exact entrances, and human-scale directions.

The prototype combines spatial waypoints, a hologram guide, dotted AR path visualization, and optional story/context cues.

## Problem

Navigation tools are strong at global routing and weak at arrival. The final segment of a journey is often where people feel the most uncertainty:

- Which door do I use?
- Which hallway leads to the room?
- Where is the pickup point?
- Which airport exit is correct?
- How do I explain this path to a guest without walking them there myself?

This problem is spatial, emotional, and social. People do not only need coordinates; they need confidence.

## Product insight

The project was inspired by the way humans guide each other: walking someone to a place, pointing out landmarks, giving small warnings, and making the route feel safe. AreWeThereYet turns that behavior into an AR interaction pattern.

Instead of asking maps to infer every detail, the system lets a person record the route once and share it as a replayable spatial experience.

## Approach

The prototype uses a two-mode workflow:

### Record mode

A route creator walks the path while the system drops spatial waypoints. Along the way, the creator can attach practical cues, stories, or easter eggs.

### Playback mode

A later user follows the recorded route through dotted AR path guidance and a small hologram guide. Contextual callouts appear at decision points.

## Technical direction

The project is built around Snap Spectacles and Lens Studio. The implementation direction includes:

- Lens Studio 5.12
- Spectacles Interaction Kit
- TypeScript lens logic
- Spatial waypoint placement
- Depth cache support
- Lens Cloud persistence direction
- Remote service gateway for future AI-assisted route context

## Design decisions

### Keep guidance glanceable

AR navigation should not fill the user’s view. The prototype uses simple path and guide metaphors because a user needs to stay aware of their real environment.

### Treat storytelling as optional context

The project supports stories and fun facts, but the route still has to work as navigation first. Storytelling should make a place feel alive; it should not make the route harder to follow.

### Focus on the last 100 meters

The prototype is not trying to replace Google Maps. It targets the handoff zone where global maps become vague and human instructions become valuable.

## Challenges

### Spatial reliability

Indoor and semi-indoor navigation is difficult because GPS is not precise enough and visual/spatial anchors can drift. The prototype needs route cues that remain useful even if tracking is imperfect.

### Trust and pacing

If the hologram guide moves too fast, too slowly, or appears misaligned, the user loses confidence. The experience needs to feel calm and recoverable.

### Scaling route creation

The strongest version of the product needs easy sharing and reuse, but it also needs moderation and privacy boundaries for routes through private or sensitive spaces.

## What this demonstrates

- XR prototyping with wearable AR constraints.
- Product thinking around spatial guidance and human reassurance.
- Ability to turn a common frustration into a clear interaction model.
- Awareness of accessibility, tourism, venues, and everyday navigation use cases.

## Future work

- Add reproducible setup documentation for Lens Studio.
- Capture a short GIF showing record and replay states.
- Add sample route data with privacy-safe mock locations.
- Explore voice notes and text-to-speech route narration.
- Prototype phone-based playback for non-glasses users.
- Add accessibility route metadata such as stairs, elevators, lighting, and noise.
