from django.contrib import admin
from db_tables_app.models import Tournament, Season,Team,Match, Player, PlayerPerMatch

@admin.register(Tournament)
class TournamentAdmin(admin.ModelAdmin):
    pass 

@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    pass 

@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    pass 

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    pass 

@admin.register(PlayerPerMatch)
class PlayerPerMatchAdmin(admin.ModelAdmin):
    pass 

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    pass 
