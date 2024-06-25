from django.contrib import admin
from .models import ChatMessage, Profile, User, Conversation
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ["username", 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'verified']
    list_editable = ['verified']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(ChatMessage)
admin.site.register(Conversation)