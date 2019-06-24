//
//  Bulb.m
//  contactListProj3
//
//  Created by Bharath on 23/06/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(Bulb, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(isOn, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onStatusChange, RCTDirectEventBlock)
@end
